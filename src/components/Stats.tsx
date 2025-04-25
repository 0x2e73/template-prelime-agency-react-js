import React from 'react';
import { Handshake, Users, HandCoins } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

const Stats: React.FC = () => {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
        <FadeInWhenVisible>
          <div className="border border-neutral-800 rounded-xl">
            <div className="p-4 lg:p-8 bg-linear-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                {[
                  {
                    icon: <Handshake className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" />,
                    stat: "2,000+",
                    label: "Preline partners"
                  },
                  {
                    icon: (
                      <div className="flex justify-center items-center -space-x-5">
                        <img className="relative z-2 shrink-0 size-8 rounded-full border-3 border-neutral-800" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                        <img className="relative z-1 shrink-0 size-8 rounded-full border-3 border-neutral-800 -mt-7" src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                        <img className="relative shrink-0 size-8 rounded-full border-3 border-neutral-800" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                      </div>
                    ),
                    stat: "85%",
                    label: "Happy customers"
                  },
                  {
                    icon: <HandCoins className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto" />,
                    stat: "$55M+",
                    label: "Ads managed yearly"
                  }
                ].map((item, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.2}>
                    <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                      {item.icon}
                      <div className="mt-3 sm:mt-5">
                        <h3 className="text-lg sm:text-3xl font-semibold text-white">{item.stat}</h3>
                        <p className="mt-1 text-sm sm:text-base text-neutral-400">{item.label}</p>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Stats;