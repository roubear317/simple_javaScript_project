var arr_Of_Quntes=[
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
  "  The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
   " If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon"
    ,"You must be the change you wish to see in the world. -Mahatma Gandhi",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt"
]
var quonte =arr_Of_Quntes[Math.floor(Math.random()*arr_Of_Quntes.length)]
function generateQuote() {
     quonte =arr_Of_Quntes[Math.floor(Math.random()*arr_Of_Quntes.length)]
    document.getElementById('quoteDisplay').innerHTML = quonte;
  }