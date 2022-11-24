
// import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {HeroCard} from '../components'
import { getHeroesbyName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate();

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const params = Object.fromEntries(searchParams.entries())
  const {q} = params;

  // const heroes = getHeroesbyName({q})
  
  const {searchText, onInputChange} = useForm({
    searchText: ''
  })

  const onSearchSubmit = (event)=>{
    event.preventDefault()

    if(searchText.trim().length <=1) return;

    navigate(`?q=${searchText}`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>

            <input type="text" 
                  placeholder="Search a hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={onInputChange}/>

            <button className="btn btn-outline-primary mt-1">Search</button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>
          {
            
            heroes.map(hero=>{ 
              return <HeroCard key={hero.id} {...hero}/>
            })

          }


          
      </div>

      </div>
     
    </>
  )
}



// import { useNavigate, useSearchParams } from "react-router-dom";
// import { HeroCard } from "../components"
// import { useForm } from '../../hooks/useForm'
// import { getHeroesByName } from "../helpers";
// import { useEffect } from "react";
 
// export const SearchPage = () => {
 
//   const navigate = useNavigate();
  
//   const [searchParams] = useSearchParams();
 
//   const {q = ''} = Object.fromEntries([...searchParams]);
 
//   useEffect(() => {
//     console.log(Object.fromEntries([...searchParams]));
//   }, [searchParams])
  
//   const heroes = getHeroesByName(q);
 
//   const {searchText, onInputChange, onResetForm} = useForm({
//     searchText: '',
//   });
 
//   const onSearchSubmit = (event) => {
//     event.preventDefault();
 
//     if (searchText.trim().length < 1) return;
    
//     navigate(`?q=${searchText}`);
//   }
 
//   return (
//     <div className='container mt-5'>
//       <h1>Search</h1>
//       <hr />
 
//       <div className="row">
//         <div className="col-5">
          
//             <h4>Searching</h4>
//             <hr />
 
//             <form action="" onSubmit={ onSearchSubmit }>
//               <input type="text"
//               placeholder='Search hero'
//               className='form-control'
//               name='searchText'
//               autoComplete='off'
//               value={searchText}
//               onChange={onInputChange} />
 
//               <button className='btn btn-outline-primary mt-1'>
//                 Search
//               </button>
//             </form>
 
//         </div>
 
//         <div className="col-7">
//           <h4>Results</h4>
//           <hr />
 
//           <div className='alert alert-primary'>
//             Search a hero
//           </div>
 
//           <div className='alert alert-danger'>
//             There's no results with <b>{q}</b>
//           </div>
 
//           {
//             heroes.map( hero => (
//               <HeroCard key={hero.id} {...hero} />
//             ))
//           }
 
//         </div>
//       </div>
//     </div>
//   )
// }