import React, { useEffect,useState } from "react";
import {
    StringsAndCallsCard, StringsAndCallsWrapper
} from './StringsAndCalls';
//import TodoComponent from "./TodoComponent";
//import {StringsAndCallsLi} from "./StringsAndCalls";


function TodoDetails() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then( result => {
                    setIsLoaded(true);
                    result.sort(( a, b) => a.title.localeCompare(b.title));
                    setItems(result);
                    console.log('result',result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    let customers = items.filter(function(item) {
        let last = item.title.substr(item.title.length - 1);
        console.log('tetetete', last)
        return item.title.charAt(0).toLowerCase() === 's';
    });


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <StringsAndCallsWrapper>
                  <StringsAndCallsCard>
                      <ul>
                          {customers.map(item => (

                             <li key={ item.id }>
                                 {item.title}
                             </li>
                          ))}
                      </ul>
                  </StringsAndCallsCard>
            </StringsAndCallsWrapper>
        );
    }
}
export default TodoDetails