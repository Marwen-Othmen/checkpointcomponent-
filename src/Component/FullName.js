import React from 'react';
import { Info } from '../Data/Data';

function FullName() {
  return <div>

<h1>Marwen </h1>
{Info.Name}
{Info.lastName}

  </div>;
}

export default FullName;
