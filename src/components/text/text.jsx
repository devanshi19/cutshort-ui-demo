import '../text/text.css'

const Text = ({text1,text2}) => {
  return (
    <div className="textwrap text-center">
        <h2>{text1}</h2>
        <p>{text2}</p>
    </div>
  )
}

export default Text