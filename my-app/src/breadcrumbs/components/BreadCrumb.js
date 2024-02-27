import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function BreadCrumb() {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(path=>path);
    console.log(pathNames);
    let link = '';
  return (
    <div className='bread-crumb'>
        {/* not to show Home link at Home page */}

      {pathNames.length > 0 && <Link to={'/'} className='bread-crumb__link'>Home</Link>}
      {pathNames.map((path, index)=>{
        link+=`/${path}`;
        if(index === pathNames.length-1){
            return <span>/{path}</span>
        }
        return <Link to={link} className='bread-crumb__link'>/{path}</Link>;
      })}
    </div>
  );
}
