mongo fortest --eval "db.dropDatabase()"
mongorestore --db=fortest  ./test/data/forum/posts.bson --collection=posts
mongorestore --db=fortest  ./test/data/forum/threads.bson --collection=threads

