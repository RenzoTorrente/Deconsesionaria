import { Flex, Box, Text } from '@chakra-ui/react';
import React,{useState} from  'react';
import {FaStar} from 'react-icons/fa';
import styles from './PropertyScore.module.css';
function PropertyScore({property}:{property:any}):JSX.Element{
const [score, setScore]:any = useState();
const [hover, setHover]:any = useState();

function updateScore(scorevalue:any){
setScore(scorevalue);
console.log(scorevalue);
}
return(
<Flex className={styles.wrapper_score}>
<Box className={styles.title_score}>
<Text fontSize={"sm"} className={styles.title_text}>{property.name}</Text>
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