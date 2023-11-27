import React from "react";
import LukeMillerProfile from "/src/assets/team-members/1.4ba4d772bcd6e82365e8.png";
import MichaelDiazProfile from "/src/assets/team-members/2.f41d050c1c5b9e59fc22.png";
import BrianaRossProfile from "/src/assets/team-members/3.1d499e4b69de7b9e10fb.png";
import LaurenRiveraProfile from "/src/assets/team-members/4.0e752081a69322c59b26.png";
import MartinRizzProfile from "/src/assets/team-members/5.e46bcc8b44d7c4298aea.png";
import CaitlynHuntProfile from "/src/assets/team-members/6.528b8c60ae315bc6a52a.png";

const teams = [
  {
    name: "Luke Miller",
    position: "Salesman",
    profileImg: LukeMillerProfile,
  },
  {
    name: "Michael Diaz",
    position: "Business Owner",
    profileImg: MichaelDiazProfile,
  },
  {
    name: "Briana Ross",
    position: "Photographer",
    profileImg: BrianaRossProfile,
  },
  {
    name: "Lauren Rivera",
    position: "Car Detailist",
    profileImg: LaurenRiveraProfile,
  },

  {
    name: "Martin Rizz",
    position: "Mechanic",
    profileImg: MartinRizzProfile,
  },
  {
    name: "Caitlyn Hunt",
    position: "Manager",
    profileImg: CaitlynHuntProfile,
  },
];

const OurTeam = () => {
  return (
    <section className="flex flex-col items-center py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px]">
        {teams.map((member) => (
          <div key={member.profileImg} className="bg-white shadow-xl w-[330px]">
            <img src={member.profileImg} alt={member.profileImg} />

            <div className="py-4">
              <h1 className="text-center font-poppins text-[22px] font-bold">
                {member.name}
              </h1>
              <h3 className="text-center font-poppins text-base text-secondary-light font-semibold">
                {member.position}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
