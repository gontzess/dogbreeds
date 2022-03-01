Create a Node application that makes a call to an external API for an object containing dog breeds and sub breeds. Url is https://dog.ceo/api/breeds/list/all .
{ message: {
akita: [],
buhund: ['norwegian'],
bulldog: ['boston', 'english', 'french'],
bullterrier: ['staffordshire'],
}
}
When the user visits path `/breeds` the response should be a JSON object containing a flatten array of dog breeds. If a breed has sub breeds, concatenate the breed and subbreed for each subbreed and omit the breed, otherwise just include the breed name.
[
'akita',
'norwegian buhund',
'boston bulldog',
'english bulldog',
'french bulldog',
'staffordshire bullterrier'
]

You also need to use Jest to test the happy path where the data is successfully sent, with status code 200. Test the case when the external API responds with an error. We need to send error with the status code 500.

All tests should work without an internet connection.

Bonus: Use TypeScript
