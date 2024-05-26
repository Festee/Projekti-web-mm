import React from 'react';
import './DestinationsStyles.css';

import Rugove1 from '../../assets/Rugove1.jpg';
import Valbone1 from '../../assets/Valbone1.jpg';
import BjeshkaGrebajes1 from '../../assets/BjeshkaGrebajes1.jpg';
import Decan1 from '../../assets/Decan1.jpg';
import Rudoke1 from '../../assets/Rudoke1.jpg'
import Erenik1 from '../../assets/Erenik1.jpg';


function Destinations() {
    return (
      <div name="destinations" className="destinations">
        <div className="container">
          <h1>Destinacionet malore me te bukura</h1>
          <p>Eksploro shtigjet e Hikingut</p>
          <div className="img-container">
            <div className="img-wrapper">
              <img src={Rugove1} alt="Rugove" />
              <div className="overlay">
                <h3>Rugove</h3>
                <p>
                  Rugova është trevë malore në Veri-Perëndim të qytetit të
                  Pejës, në Kosovë. Është regjioni i tretë i Bjeshkëve të
                  Nemuna, të njohura ndryshe si Alpet Shqiptare. Në vitin 2013 u
                  shpall Park Kombëtar nga Kuvendi i Republikës së Kosovës.
                  Rugova është e pasur me forma të shumta si shpellat, ujëvarat,
                  liqenet glaciale, majat e larta, tunelet etj. maja më e lartë
                  është Hajla (2403 m) por rëndësi dhe interes paraqet edhe Qafa
                  e Qyqes nga e cila mund të soditet i tërë qyteti i Pejës. Nga
                  Guri i Kuq (1522 m) shihen si në pëllëmbë të dorës: Gjeravica,
                  trekufiri Boriqe, maja e Mariashit,maja e Hekurave, Shkëlzeni
                  dhe Liqeni i Plavës. Volujaku është po ashtu një maje e lartë
                  (2014 m).
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={Valbone1} alt="Valbone" />
              <div className="overlay">
                <h3>Valbone</h3>
                <p>
                  Të bësh një udhëtim në vjeshtë, në Luginën e Valbonës, duhet
                  të përgatitesh jo vetëm materialisht për çfarë do të marrësh
                  me vete, por në radhë të parë shpirtërisht, për të përballuar
                  dhe shijuar nga ana emocionale, bukuritë befasuese të këtij
                  parku kombëtar verior të Shqipërisë, i cili tashmë është shumë
                  i vizituar jo vetëm nga të huajt por edhe nga mjaft shqiptarë,
                  të ngopur me detin e të etur për aventurë. Valbona nuk është
                  thjesht një destinacion natyror i Shqipërisë, ajo është një
                  kompleksitet dukurish interesante, si e gjithë pjesa tjetër e
                  Alpeve Shqiptare, që ngërthen bashkë të gjitha kuptimet e së
                  bukurës.
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={BjeshkaGrebajes1} alt="Bjeshka Grebajes" />
              <div className="overlay">
                <h3>Bjeshka Grebajes</h3>
                <p>
                  Do të keni rastin ta përjetoni bjeshkën madhështore të egër
                  por shumë të bukur të Grebajes, MAJËS SË VAJUSHËS, dhe të
                  mahniteni me bjeshkët pa fund të majeve të thepisura të
                  Bjeshkëve të Nemuna në Mal të Zi dhe Shqipëri. Ecja zgjate
                  rreth 12km lartë e poshtë (4 orë lartë dhe 3 orë poshtë) dhe
                  është e përshtatshme edhe për fillestarë.
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={Decan1} alt="Deçan" />
              <div className="overlay">
                <h3>Deçan</h3>
                <p>
                  Deçani është afirmuar si qendër turistiko-rekreative.
                  Fenomenet natyrore dhe ato të rralla antropogjenë të këtij
                  mjedisi parqesin motivet komplementare turistike të Rrafshit
                  të Dukagjinit. Është me interes dhe atraktive lugina fluvialo
                  g-glaciale e Lumbardhit të Deçanit, e cila prej burimit deri
                  në vendderdhje në Drinin e Bardhë, me gjatësi 40 km, ka një
                  pjerrtësi vertikale rreth 2000 m. E tërë hapësira rreth
                  Deçanit, gjegjësisht në mallet që e rrethojnë, janë me liqene
                  akullnajore due me lugina të lumenjve, të cilat kanë formë të
                  grykës due janë shumë tërheqëse për vizitorë
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={Rudoke1} alt="Rudoke" />
              <div className="overlay">
                <h3>Rudoke</h3>
                <p>
                  Rudoka e Madhe është një majë mali e masivit malor Bjeshkët e
                  Sharrit. Lartësia e saj është 2658 metra mbi nivelin e detit.
                  Vija kufitare midis Maqedonisë së Veriut dhe Kosovës kalon
                  pikërsiht nëpër maje, prandaj është edhe maja më e lartë e
                  Kosovës.
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={Erenik1} alt="Erenik" />
              <div className="overlay">
                <h3>Erenik</h3>
                <p>
                  Parku Kombëtar i Bjeshkëve të Nemuna është një park kombëtar i
                  cili ndodhet në perëndim të Kosovës, më konkretisht ai
                  shtrihet në Rajonin e Pejës dhe Rajonin e Gjakovës. Parku
                  përfshin një sipërfaqe prej 62,488 hektarësh ndërsa u
                  themelua me qëllim të mbrojtjes së ekosistemit,
                  biodiversitetit si dhe trashëgimisë kulturore e historike të
                  kësaj pjese të Bjeshkëve të Nemuna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Destinations;
