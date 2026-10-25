import React from 'react'

const user = () => {
    const arr = [10,99,30];

  return (
     <div className='parent'>
        {arr.map(function(elem){
            return <h1>elem/2</h1>
        }
    )}{

        }


     </div>
  )
}

export default user

parser = PydanticOutputParser(pydantic_object=Movie)


prompt = ChatPromptTemplate.from_messages([
    ('system',"""
Extract movie information from the paragraph
     {format_instructions}
"""),
("human","{paragraph}")
]
)



para = input("Give your paragraph : ")

final_prompt = prompt.invoke(
    {"paragraph" : para,
     'format_instructions': parser.get_format_instructions()
     }
)

response = model.invoke(final_prompt)
movie_data = parser.parse(response.content)

print(movie_data)