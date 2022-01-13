import {useState} from 'react';
import Count from './Count';

function Block() {

    const [state, setCounters] = useState({ red: 0, yellow: 0, green: 0, blue:0 });
    
    function incrementRed()
    {
        setCounters({...state, red: state.red + 1});
    }

    function incrementYellow()
    {
        setCounters({...state, yellow: state.yellow + 1});
    }

    
    function incrementGreen()
    {
        setCounters({...state, green: state.green + 1});
    }

    function incrementBlue()
    {
        setCounters({...state, blue: state.blue + 1});
    }


    return (
      <div>
        <button
        className='btn-red'
          onClick={incrementRed}
        >
         Click
        </button>

        <button
        className='btn-yellow'
        onClick={incrementYellow}
        >
          Click
        </button>

        <button
        className='btn-green'
        onClick={incrementGreen}
        >
          Click
        </button>
        <button
        className='btn-blue'
        onClick={incrementBlue}
        >
          Click
        </button>
        
        <div>Red: {state.red}</div>
        <div>Yellow: {state.yellow}</div>
        <div>Green: {state.green}</div>
        <div>Blue: {state.blue}</div>

      </div>
    );
}

export default Block;