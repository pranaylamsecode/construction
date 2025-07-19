
const mongoose = require('mongoose');
const Blog = require('@/models/Blog');

mongoose.connect(process.env.MONGO_URI).then(async () => {
    await Blog.create({
        title: 'Welcome to the Blog',
        slug: 'welcome-blog',
        content: 'This is the first blog post.',
        tags: ['intro', 'news']
    });
    console.log('Blog seeded!');
    process.exit();
});
