import React from 'react';

function TextConditionExample({ data }) {
  const notVotedIds = [];
  let textt = ""
  //console.log(data.randomText)
  const displaytext=data.randomText
  displaytext.forEach((item) => {
  console.log(item);
  textt= item.yesNo;
  if (textt === "-") {
    notVotedIds.push(item.Proposalid);
  }
 
  });
  return (
    <div>
     {notVotedIds.length > 0 ? (
        <p>{notVotedIds.join(', ')} is not voted</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default TextConditionExample;