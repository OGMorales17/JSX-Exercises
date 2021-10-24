const Person = ({ name, age, hobbies }) =>
    <div>
        <p>Learn some information about this person</p>
        <p>
            {name.length <= 8 ? name : name.substring(0, 6)}
            <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
            <ul>
                {hobbies.map((hobby) => <li>{hobby}</li>)}
            </ul>
        </p>

    </div>;

// const Person = ({ name, age, hobbies }) => {
//     return <div>
//         <p>Learn some information about this person</p>
//         <p>
//             {name.length <= 8 ? name : name.substring(0, 6)}
//             <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
//             <ul>
//                 {hobbies.map((hobby) => <li>{hobby}</li>)}
//             </ul>
//         </p>

//     </div>
// };