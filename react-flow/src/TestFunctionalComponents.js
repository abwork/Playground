import * as React from 'react';

type Props = {
  date: string,
}

function TestFunctionalComponents(props: Props) {
  return ( 
    <div > 
      Date: {props.date} 
    </div>
  )
}

export default TestFunctionalComponents;