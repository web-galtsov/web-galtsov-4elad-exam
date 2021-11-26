import React from 'react';
import TodoDetails from './TodoDetails'
import { StringsAndCallsContainer, StringsAndCallsH1,Subtitle} from './StringsAndCalls';
const Services = ({
                       description,
                       primary,
                       darkText,
                      description1
                     }) => {
 /* console.log(primary);*/
  return (
    <StringsAndCallsContainer id="StringsAndCalls">
      <StringsAndCallsH1>Strings and Calls</StringsAndCallsH1>
        <Subtitle darkText={darkText}>
          {description}
        </Subtitle>
        <TodoDetails/>
          <StringsAndCallsH1>What is a violation of the MVC pattern and suggest a solution.</StringsAndCallsH1>
        <Subtitle darkText={darkText}>
            {description1}
        </Subtitle>
            <ul className="circles">
                <li/>li/><li/><li/><li/><li/><li/><li/><li/><li/>
            </ul>
    </StringsAndCallsContainer>
  );
};

export default Services;
