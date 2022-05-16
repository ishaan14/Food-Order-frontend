import React,{useState,Fragment,useEffect} from 'react';
import FoodList from '../components/foods/FoodList'

import MealsPosterImage from '../assets/meals.jpg'
import styles from './AllFoods.module.css'

import axios from 'axios';


const AllFoods=()=>{

    // const dummy_food=[
    //     {
    //         id:'f1',
    //         name:'Burger',
    //         price:40,
    //         desc:'Extra cheese and spicy'
    //     },
    //     {
    //         id:'f2',
    //         name:'Paneer Tikka',
    //         price:222.5,
    //         desc:'Smooth and delicious paneer,grilled to perfection'
    //     },
    //     {
    //         id:'f3',
    //         name:'Pizza',
    //         price:88,
    //         desc:'italian style pizza'
    //     },
    //     {
    //         id:'f4',
    //         name:'Pasta',
    //         price:50,
    //         desc:'Saucy and Creamy loaded with mayo'
    //     },
    //     {
    //         id:'f5',
    //         name:'Noodles',
    //         price:60,
    //         desc:'Korean style soupy noodles'
    //     }
    // ];

    // const [foods,setFoodState]=useState(dummy_food);
    const [foods,setFoods]=useState([]);

    useEffect(()=>{
        async function getfoods(){
            try{
                const res=await axios.get('http://localhost:8000/allfoods')
                // console.log(res);
                setFoods(res.data);
            }
            catch(e){
                console.log(e.message);
            }
        }


        getfoods();

    },[])

    return(
        <Fragment>
            <section className={styles.poster}>
                <img src={MealsPosterImage} alt="table full of meals"/>
            </section>
            <FoodList foods={foods}/>
        </Fragment>
    )
}


export default AllFoods