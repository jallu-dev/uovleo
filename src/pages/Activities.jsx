import React, { useState } from "react";
import little1 from "./../assets/activities/little1.jpg";
import little3 from "./../assets/activities/little3.jpg";
import little2 from "./../assets/activities/little2.jpg";
import ashirwadha1 from "./../assets/activities/ashirwadha1.png";
import ashirwadha2 from "./../assets/activities/ashirwadha2.png";
import ashirwadha3 from "./../assets/activities/ashirwadha3.png";
import christmas1 from "./../assets/activities/christmas1.png";
import christmas2 from "./../assets/activities/christmas2.png";
import christmas3 from "./../assets/activities/christmas3.png";
import community1 from "./../assets/activities/community1.png";
import community2 from "./../assets/activities/community2.png";
import inaugural1 from "./../assets/activities/inaugural1.jpg";
import inaugural2 from "./../assets/activities/inaugural2.jpg";
import inaugural3 from "./../assets/activities/inaugural3.jpg";
import orientation1 from "./../assets/activities/orientation1.png";
import raffle1 from "./../assets/activities/raffle1.png";
import raffle2 from "./../assets/activities/raffle2.png";
import raffle3 from "./../assets/activities/raffle3.png";

import Activity from "../components/Activity";

const Activities = () => {
  const data = [
    {
      date: "Aug 2024",
      heading: "Project Little Champs",
      imgsArr: [little1, little3, little2],
      content:
        "In August 2024, the Leo Club of the University of Vavuniya organized “Little Champs,” a special event at Vavuniya Busy Bees Preschool aimed at promoting education and literacy among young children. The event featured fun and engaging sports activities, fostering teamwork and enhancing the physical and mental development of the participants. Through creative games and competitions, the children were encouraged to pursue excellence in both academics and extracurricular activities, making the event a heartwarming and impactful success.",
    },
    {
      date: "Mar 2024",
      heading: "Inaugural Installation Ceremony",
      imgsArr: [inaugural1, inaugural2, inaugural3],
      content:
        "In March 2024, the Leo Club of the University of Vavuniya proudly celebrated its official chartering by Lions Clubs International. This milestone event marked the beginning of a new era of service, as the club held its First Installation & Charter Presentation Ceremony. The induction of new members highlighted their commitment to the club’s mission of youth empowerment and community service, setting the foundation for a lasting positive impact.",
    },
    {
      date: "Feb 2024",
      heading: "Community Guardian",
      imgsArr: [community1, community2],
      content:
        "On February 14, 2024, the Leo Club of the University of Vavuniya successfully organized the “Community Guardian” Drug Prevention program in collaboration with the Police Station - Vavuniya. This important initiative aimed to raise awareness about drug prevention and foster stronger community ties.",
    },
    {
      date: "Dec 2023",
      heading: "The Christmas Present",
      imgsArr: [christmas1, christmas2, christmas3],
      content:
        "In December 2023, the Leo Club of the University of Vavuniya launched “The Christmas Present,” a heartwarming initiative to express gratitude to the university’s dedicated security staff. Sponsored by Bathurston Bakery, the successful gift drive spread smiles and holiday cheer, showing appreciation to the campus guardians during the festive season.",
    },
    {
      date: "Nov 2023",
      heading: "Raffle Draw",
      imgsArr: [raffle1, raffle2, raffle3],
      content:
        "In November 2023, the Leo Club of the University of Vavuniya organized a successful fundraising program through a raffle draw. This initiative received enthusiastic support from the student community, generating essential funds for the club’s upcoming projects and initiatives. The event underscored the club’s resourcefulness and dedication to financial sustainability, while also fostering greater engagement within the university community.",
    },
    {
      date: "Nov 2023",
      heading: "The Orientation Program",
      imgsArr: [orientation1],
      content:
        "In November 2023, the Leo Club of the University of Vavuniya hosted a dynamic orientation program to welcome new members. The event highlighted the club’s mission, values, and activities, offering fresh members a comprehensive introduction to the club’s vibrant community. Esteemed guests from MDP, DP, and DS shared their valuable experiences, inspiring the new members to contribute to the club’s future success actively.",
    },
    {
      date: "Nov 2023",
      heading: "Ashirwadha Pooja Club Outing Program November 2023",
      imgsArr: [ashirwadha1, ashirwadha2, ashirwadha3],
      content:
        "November 2023, the Leo Club of the University of Vavuniya hosted an interfaith Ashirwadha Pooja, bringing together representatives from Hinduism, Buddhism, Islam, and Christianity. This sacred ceremony was held to seek blessings for the club and its members, symbolizing unity and mutual respect. The event highlighted the club’s dedication to fostering inclusivity and understanding among diverse religious traditions within the university community.",
    },
  ];

  return (
    <div className={`m-3`}>
      {data.map((item, ind) => (
        <Activity
          date={item.date}
          heading={item.heading}
          imgsArr={item.imgsArr}
          content={item.content}
          key={ind}
        />
      ))}
    </div>
  );
};

export default Activities;
