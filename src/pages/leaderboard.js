import { useState } from 'react';

export const Leaderboard = () => { 
    const [leaderboard , setLeaderboard] = useState('');

return (
    <div>
    <div>
        <h2>Leaderboard</h2>      
    </div>
    
    </div>
)

}
export default Leaderboard
//Marks stored in a sorted array in db 
//Order TextViews according to an array from the database
//Display Name , score and position of the person on the learderboard