import { useState, useEffect } from 'react';
import './BeyBlade.scss';

function BeyBlade(props) {

  const [isRipped, setIsRipped] = useState(false);
  const [data, setData] = useState({});


  useEffect(() => { // greedy effect!!
    console.log('SOMETHING SOMEWHERE HAS HAPPENED');
  }); // no dependency list, means subscribed to all changes.

  // componentDidMount -> method on React.Component class

  /**
   * component.on('isRipped', () => {});
   */

  // 1st lifecycle -> mounting
  useEffect(() => { // exact same thing as componentDidMount
    setData({ results: ['ripper'] }); // sometime
    console.log('BEYBLADE HAS ENTERED THE ARENA');
  }, []); // empty dependency list means our effect (callback) is only run after component mounts

  // 2nd stage - Run when isRipped is updated
  useEffect(() => {
    console.log(props.name + ' HAS BEEN RIPPED or UN-RIPPED!!');
  }, [isRipped]);

  // 3rd state - unmounting, return a function that will be run when the component un-mounts the DOM.
  useEffect(() => {
    return () => {
      console.log('*** this should run only on unmount ***');
    }
  }, []); // make sure you include your empty dependency list for un-mounting effects

  const rip = () => {
    setIsRipped(true);

    setTimeout(() => {
      setIsRipped(false);
    }, 3000);
  };
  return (
    <>
      <h2>{props.name}</h2>
      <button onClick={rip}>Rip Me!!</button>
      <div className={isRipped ? 'spinner' : null}>
        <p>{props.name} Has been ripped: {`${isRipped}`}</p>
      </div>
    </>
  )
}

export default BeyBlade;