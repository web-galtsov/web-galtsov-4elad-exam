import React, { useEffect,useState } from "react";
import {
    StringsAndCallsCard,
    StringsAndCallsWrapper
} from './StringsAndCalls';

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
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

        const customers = items.filter(function(item) {
           return item.title.charAt(0).toLowerCase() === 's' ;
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
                              item.title.substr(item.title.length - 1) === 'e' ?
                                  <li key={item.id} className="styleFont" >{item.title} </li>
                                  :  <li key={item.id}> {item.title}  </li>
                              ))}
                      </ul>
                  </StringsAndCallsCard>
            </StringsAndCallsWrapper>
        );
    }
}
export default TodoDetails