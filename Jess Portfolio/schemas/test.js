export default {
  name: 'test',
  type: 'document',
  title: 'Test',
  fields: [
    {
      name: 'Name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'Card',
      type: 'image',
      title: 'Card'
    },
    {
      name: 'SubDoc',
      type: 'document',
      title: 'Subdoc',
      fields: [
        {
          name: 'Name',
          type: 'string',
          title: 'Name'
        },
      ]
    },
    {
      name: 'ListOfTests',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'boob'},
            {type: 'myRichTextExample'},
          ]
        }
      ]
    }
  ]
}