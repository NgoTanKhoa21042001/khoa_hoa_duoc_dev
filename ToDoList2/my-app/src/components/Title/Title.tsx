import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
}
const Title = (props: TitleProps) => {
  console.log(props.address)

  return <h1 className={styles.title}>To do list Typescript</h1>
}

function equal(prevProp: TitleProps, nextProp: TitleProps) {
  return prevProp.address.street === nextProp.address.street
}

// tham soos thứ 2 là func check comp có render hay ko
export default React.memo(Title, equal)
