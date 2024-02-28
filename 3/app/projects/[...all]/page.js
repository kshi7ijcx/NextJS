'use client'

const Project = ({params}) => {
  return (
    <div>This page is for {params.all.map((p)=>(<p key={p}>{p}</p>))}</div>
  )
}
export default Project