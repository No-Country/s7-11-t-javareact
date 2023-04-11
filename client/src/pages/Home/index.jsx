import React from 'react';
import { Link } from 'react-router-dom';
import ListsCard from '../../components/ListsCard';
import GoBack from '@/layouts/GoBack';
import Navbar from '@/layouts/NavBar';

const Home = () => {

  const recentLists = [
    { id: 1, name: 'Lista de compras', date: '2 días atrás' },
    { id: 2, name: 'Lista de tareas', date: '1 semana atrás' },
    { id: 3, name: 'Lista de deseos', date: '2 semanas atrás' },
    { id: 2, name: 'Lista de tareas', date: '1 semana atrás' },
    { id: 2, name: 'Lista de tareas', date: '1 semana atrás' }

  ];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 gap-4 h-full md:grid-cols-2 lg:grid-cols-3">
      <Navbar/>
      <GoBack />
      <div className="col-span-full flex justify-between items-center h-full mb-6">
        <h1 className="text-2xl font-bold">Listas recientes</h1>
        <Link to="/list">
          <div className="w-16 h-16 lg:hidden bg-gray-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </Link>
      </div>
      {recentLists.map((list) => (
    
        <ListsCard key={list.id} title={list.name} subtitle={`Actualizada ${list.date}`} />
      ))}
       <Link to="/list">
        <div className="hidden lg:block ">
  <div className="max-w-[22rem] h-28 bg-gray-200 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-300">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </div></div>
</Link>
    </div>
  );
};

export default Home;
