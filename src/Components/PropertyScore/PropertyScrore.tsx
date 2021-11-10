import { Flex, Box, Text } from '@chakra-ui/react';
import React,{useState,useEffect} from  'react';
import {FaStar} from 'react-icons/fa';
import styles from './PropertyScore.module.css';
import { propertiescore } from '../../utilities/types';
import { UpdateVehiclePropertyValue } from '../../services/PropertyService';
function PropertyScore({prop , carid}:{prop:propertiescore, carid:number}):JSX.Element{
 


const [score, setScore]:any = useState();
const [hover, setHover]:any = useState();

useEffect(() => {
setScore(prop.value);
}, [prop]);
async function updateScore(scorevalue:any){
setScore(scorevalue);
const updatevehicleproperty = await UpdateVehiclePropertyValue(carid, prop.id, score); 
}
return(
<Flex className={styles.wrapper_score} key={prop.id}>
<Box className={styles.title_score}>
<Text fontSize={"sm"} className={styles.title_text}>{prop.name}</Text>
</Box>
<Box className={styles.star_score}>
{[...Array(5)].map((star, i) => {
        const scorevalue = i + 1;
        return (
          <label key={scorevalue}>
            <input
              name='ratingStar'
              onClick={() => updateScore(scorevalue)}
              type='radio'
              value={scorevalue}
            />
            <FaStar
              className={styles.star}
              color={scorevalue <= (hover || score) ? '#ffc107' : 'e4e5e9'}
              onMouseEnter={() => setHover(scorevalue)}
              onMouseOut={() => setHover(null)}
              size={22}
            />
          </label>
        );
      })}
</Box>
</Flex>

)    

}
export default PropertyScore;