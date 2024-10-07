import React from "react";

import president from "./../assets/members/exco/president.jpg";
import assSecretary2 from "./../assets/members/exco/ass-secretary-2.jpg";
import assSecretary from "./../assets/members/exco/ass-secretary.jpg";
import assTreasurer from "./../assets/members/exco/ass-treasurer.jpg";
import pastPresident from "./../assets/members/exco/past-president.jpg";
import secretary from "./../assets/members/exco/secretary.jpg";
import treasurer from "./../assets/members/exco/treasurer.jpg";
import vicePresident from "./../assets/members/exco/vice-president.jpg";
import advisor from "./../assets/members/exco/edwinSir.jpeg";

import it from "./../assets/members/directors/it.jpg";
import administrative from "./../assets/members/directors/administrative.jpg";
import chiefEditor from "./../assets/members/directors/chief-editor.jpg";
import coordFas from "./../assets/members/directors/coord-fas.jpg";
import coordFobs from "./../assets/members/directors/coord-fobs.jpg";
import coordFots from "./../assets/members/directors/coord-fots.jpg";
import design from "./../assets/members/directors/design.jpg";
import editing from "./../assets/members/directors/editing.jpg";
import marketing from "./../assets/members/directors/marketing.jpg";
import media from "./../assets/members/directors/media.jpg";
import quality from "./../assets/members/directors/quality.jpg";
import relations from "./../assets/members/directors/relations.jpg";
import MemberCard from "../components/MemberCard";

const Members = () => {
  return (
    <div className="m-3">
      <div className="p-2 border-4 border-amber-600">
        <h1 className="uppercase text-center text-2xl mb-4">
          executive committee
        </h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center relative mb-6 ">
          <MemberCard
            img={advisor}
            position="Club Advisor"
            name="Proctor Edwin Linosh"
            email="linosh85@vau.ac.lk"
            tel="0773248283"
            style="order-2 md:order-none"
            // small={true}
          />
          <MemberCard
            img={president}
            position="president"
            name="Leo Anuradhya Liyanaarachchi"
            email="anudew16@gmail.com"
            tel="0702065081"
            large={true}
            style="order-1 md:order-none"
          />
          <MemberCard
            img={pastPresident}
            position="Immediate Past President"
            name="Leo Malshi Imasha"
            email="imashamalshi7@gmail.com"
            tel="0774656016"
            style="order-3 md:order-none"

            // style="absolute right-16"
            // small={true}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center relative mb-6 ">
          <MemberCard
            img={vicePresident}
            position="vice President"
            name="Leo Moganraj Krishnakumaran"
            email="mohanrajkrishnakumaran@gmail.com"
            tel="0772139159"
          />{" "}
          <MemberCard
            img={secretary}
            position="secretary"
            name="Leo Shashini Anuththara"
            email="mirinchigeshashini@gmail.com"
            tel="0716302585"
          />
          <MemberCard
            img={treasurer}
            position="treasurer"
            name="Leo Nedula Dahanayake"
            email="nedula2001@gmail.com"
            tel="0716646647"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center relative mb-6 ">
          <MemberCard
            img={assSecretary}
            position="Assistant Secretary"
            name="Leo Tharushi Munasinghe"
            email="tharushimunasinghe516@gmail.com"
            tel="0760858218"
          />
          <MemberCard
            img={assSecretary2}
            position="Assistant Secretary"
            name="Leo Hirusha Ruchini"
            email="hirushajayasundara03@gmail.com"
            tel="0760675755"
          />
          <MemberCard
            img={assTreasurer}
            position="Assistant Treasurer"
            name="Leo Naduni Kaveesha"
            email="nadunikaveesharathnapala@gmail.com"
            tel="0760065108"
          />
        </div>
      </div>
      <div className="p-2 border-4 border-amber-600 mt-6">
        <h1 className="uppercase text-center text-2xl mt-4 mb-4">
          Board of Directors
        </h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center relative mb-6 ">
          <MemberCard
            img={it}
            position="Director of IT"
            name="Leo Zahran Liyasdeen"
            email="zzzahrannnldeen@gmail.com"
          />
          <MemberCard
            img={design}
            position="Director of designing"
            name="Leo Chrishen Silva"
            email="chrishensilva@gmail.com"
          />
          <MemberCard
            img={marketing}
            position="Director of Marketing & Finance"
            name="Leo Chandru Kumara"
            email="chandrakumarachandru0@gmail.com"
          />
          <MemberCard
            img={media}
            position="Director of Media"
            name="Leo Indusara Rusith"
            email="indusararusith@gmail.com"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center relative mb-6 ">
          <MemberCard
            img={chiefEditor}
            position="Chief Editor"
            name="Leo Disitha Ranasinghe"
            email="disithar@gmail.com"
          />
          <MemberCard
            img={relations}
            position="Director of Leo- Lion & International Relations"
            name="Leo Vallipuranathan Krishan"
            email="kirioffl43@gmail.com"
          />
          <MemberCard
            img={coordFots}
            position="Director of Membership & Coordinating (FOTS)"
            name="Leo Imashi Sandeepika"
            email="imashisandeepika2001@gmail.com"
          />
          <MemberCard
            img={coordFobs}
            position="Director of of Membership & Coordinating (FBS)"
            name="Leo Farha Abdul Fareed"
            email="farhafareed2001@gmail.com"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-around items-center relative mb-6 ">
          <MemberCard
            img={coordFas}
            position="Director of Membership & Coordinating (FAS)"
            name="Leo Vabisha Velautham"
            email="vabishavelautham7@gmail.com"
          />
          <MemberCard
            img={editing}
            position="Director of Editing"
            name="Leo Fathima Rashida"
            email="fathimarashidha201@gmail.com"
          />
          <MemberCard
            img={quality}
            position="Director of Quality Management"
            name="Leo Dulina De Silva"
            email="dulinabhanukadesilva@gmail.com"
          />
          <MemberCard
            img={administrative}
            position="Director of Administrative"
            name="Leo Sakitha Sacikumar"
            email="sacivasuki@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Members;
