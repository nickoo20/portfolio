import React from "react" ;

type SectionHeadingProps = { 
  children : React.ReactNode ; 
};

export default function SectionHeading({children} : SectionHeadingProps){
  return (
    <h2 className='text-2xl font-sora font-medium uppercase mb-8 text-center'>{children}</h2>
  )
}
