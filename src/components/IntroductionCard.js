function IntroductionCard(props) {//componens függvény props-okkal
  const name = props.name;
  const school = props.school;
  const age = props.age;
  const hobbyList = props.hobbyList;

  const hairColor = props.hairColor;
  const height = props.height;
  const sex = props.sex;


  let content =
    <div className="introduction">
      <p className="introduction__text">
        Hello, my name is {name}. I am a student at {school}, and I would like to be the best React developer in the world :).
        I'm {age} years old, and my hobbies are {hobbyList.join(", ")}.
        I'm {height} tall, and my hair is {hairColor}. I'm a {sex}.
      </p>
    </div>;

  return content;
}

export default IntroductionCard;