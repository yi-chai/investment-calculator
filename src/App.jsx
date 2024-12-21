import {useState} from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results.Jsx";
import {Flex} from "antd";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const isInputValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <Flex vertical align="center">
            <Header/>
            <UserInput input={userInput} onChangeInput={handleChange}/>
            {isInputValid && <Results input={userInput}/>}
            {!isInputValid && (
                <p className="center">Please enter a duration greater than zero.</p>
            )}
        </Flex>
    );
}

export default App;
