import React from "react";

const Home = () => {
  return (
    <div>
      <nav className="h-[10vh] bg-gray-600"></nav>
      <main className="flex">
        <aside className="w-[25%] bg-amber-500    h-[80vh]"></aside>
        <section className="w-[75%] bg-yellow-500 h-[80vh]"></section>
      </main>
      <footer className="h-[10vh] bg-green-300"></footer>
    </div>
  );
};

export default Home;
