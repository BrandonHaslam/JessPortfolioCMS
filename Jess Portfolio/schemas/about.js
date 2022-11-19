export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'bio',
      title: 'Bio',
      type: 'document',
      fields: [
          { 
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          { 
            name: 'body',
            title: 'Body',
            type: 'text',
            validation: Rule => Rule.required()
          },
          {
            name: 'cvUrl',
            title: 'CV Url',
            type: 'url',
            validation: Rule => Rule.required()
          }
        ]
      },
    {
      name: 'software',
      type: 'array',
      title: 'Software',
      of: [
        {   
          type: 'image',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description: `Text that's displayed with the image`,
              isHighlighted: true,
              validation: Rule => Rule.required()
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: `Describe the image for people who can't see it`,
              isHighlighted: true,
              validation: Rule => Rule.required()
            },
            {
              name: 'backgroundColour',
              title: 'Background Colour',
              type: 'color',
              isHighlighted: true,
              validation: Rule => Rule.required()
            }
          ],
        }
      ]
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      description: 'A list of skills that include a title and body',
      of: [
        {
          type: 'document',
          fields: [
            { 
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            // { 
            //   name: 'body',
            //   title: 'Body',
            //   type: 'text'
            // }
          ]
        }
      ]
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      description: 'A list of experience that include a title and body',
      of: [
        {
          type: 'document',
          fields: [
            { 
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            { 
              name: 'subtitle',
              title: 'Sub Title',
              type: 'string'
            },
            { 
              name: 'body',
              title: 'Body',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}

// 
// As part of the maUI/UX Designer
// OPOP Media (July, 2021 - Present)
// As rketing team at OPOP Media, my core role is to create digital products including websites, apps and customer relationship systems from concept to completion, ensuring an accessible, inclusive and dynamic experience.
// Freelance Brand Designer
// (2019 - 2021)
// As a Freelance Brand Designer, strengthening my time management and self initiative was essential towards maximising overall project credibility and client communication. I provided clients with full brand packages including logos, web design, product design, social media and advertising content.
// BA Hons Graphic Design
// Level 3 BTEC Diploma Art & Design
// Manchester Metropolitan University (2015 - 2019)