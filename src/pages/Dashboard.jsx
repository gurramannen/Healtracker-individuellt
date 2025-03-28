import React, { useEffect } from 'react';
import CurrentWeight from '../components/dashboard/CurrentWeight';
import AddWeight from '../components/AddWeight';
import TodaysMeals from '../components/dashboard/TodaysMeals';
import KcalStatus from '../components/dashboard/KcalStatus';
import WelcomeProfile from '@/components/dashboard/WelcomeProfile';
import { Progress } from "../components/ui/progress";
import EnergyPieChart from '../components/EnergyPieChart';
import { useSelector } from "react-redux";
import { toast, Toaster } from 'react-hot-toast';
import WeightChart from '../components/dashboard/WeightChart'; // Se till att sökvägen stämmer


const Dashboard = () => {
  // Hämta alla loggade måltider
  const mealLogs = useSelector((state) => state.meals?.mealLogs ?? []);
  // Summera alla energivärden (kalorier) från måltiderna
  const loggedCalories = mealLogs.reduce(
    (total, meal) => total + Number(meal.energy),
    0
  );

  // Använd TDEE från profile-staten som dagligt kalorimål
  const dailyCalorieGoal = useSelector((state) => state.profile?.tdee) || 2000;

  const energyData = [50, 30, 20]; // Exempeldata för energifördelning

  const weightData = useSelector((state) => state.profile?.weight) || [];


  // Visa en toast när användaren når sitt dagliga kaloriintag
  useEffect(() => {
    if (loggedCalories >= dailyCalorieGoal) {
      toast.success('Grattis! Du har nått ditt dagliga kaloriintag!');
    }
  }, [loggedCalories, dailyCalorieGoal]);

  return (
    <main className="flex justify-center items-start">
      {/* Toaster-komponenten för att visa toast-meddelanden */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-[800px] p-4">
        {/* Vänster kolumn */}
        <div className="flex flex-col gap-4">
          <WelcomeProfile />
          <KcalStatus />
          {/* Progressbar som uppdateras utifrån inloggade kalorier relativt dagligt mål */}
          <Progress value={(loggedCalories / dailyCalorieGoal) * 100} />
          <AddWeight onSubmit={() => {}} />
          <section className="w-full max-w-xl">
        <WeightChart weightData={weightData} />
      </section>
          <section className="card">
            <EnergyPieChart energyData={energyData} />
          </section>
        </div>
        {/* Höger kolumn */}
        <div className="md:col-span-1">
          <TodaysMeals />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;