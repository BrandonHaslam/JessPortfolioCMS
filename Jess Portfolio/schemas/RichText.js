export default {
  name: 'myRichTextExample',
  type: 'document',
  title: 'RichText',
  fields: [
    {
      title: 'Rich text example',
      name: 'myRichTextExample',
      type: 'array',
      of: [{type: 'block'}]
    },
  ]
}