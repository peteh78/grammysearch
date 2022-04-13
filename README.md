For this excercise, I started with a dataset from https://www.kaggle.com/datasets/theriley106/grammyawardsinnumbers which had grammy winners from the first 60 years of awards (through 2017). I did a quick conversion from the base int of 1-60 to the actual calendar year (1958-2017) locally using powershell, and uploaded to my algolia 'Grammys' index.

I then used the [create-instantsearch-app] to boostrap # grammys-test-app

Using a combination of algolia doc's (Getting Started with InstantSearch,  the autocomplete.js docs, etc.) and the Algolia dashboard Index configuration, I setup search attributes of:

Year (annualGrammy)
Artist (name)
Album/Artist (awardFor) 
Award Name (category)

and Filters for

Year
Award Name

and applied some basic styling to the page and results.

 
