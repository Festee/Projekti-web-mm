import React from 'react'
import './SearchStyles.css'
import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div name='book' className='search'>
        <div className="container">
            <div className="left">
                <h2>LUXURY INCLUDED VACATIONS FOR 2 PEOPLE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis, cumque quasi tempore deserunt dolorum totam pariatur voluptatibus ex eligendi, est commodi aspernatur? Laboriosam, iusto dolores animi expedita praesentium voluptates.</p>
                <div className="search-col-2">
                    <div className="box">
                        <div>
                            <img src={Gold} alt='/'style={{marginRight:'1rem'}}/>
                        </div>
                        <div>
                            <h3>WORLD'S LEADING</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <h3>NO ONE INCLUDES MORE</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            <button>View Packages</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="promo">
                    <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                    <p className="timer">12 HOURS LEFT!</p>
                    <p className="offers">VIEW ALL CURRENT OFFERS</p>
                </div>
                <form action="">
                    <div className="input-wrap">
                        <label htmlFor="">Destination</label>
                        <select>
                            <option value="1">Grand Antigua</option>
                            <option value="1">Granada</option>
                            <option value="1">Emerald Bay</option>
                            <option value="1">Bora Bora</option>
                            <option value="1">Key West</option>
                            <option value="1">Maldives</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label>Check-In</label>
                            <input type="date" />
                        </div>
                        <div className="input-wrap">
                            <label>Check0Out</label>
                            <input type="date" />
                        </div>
                    </div>
                    <button>Rates & Availabilities</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search