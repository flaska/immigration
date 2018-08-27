rm ./test/data/forum/posts.bson
rm ./test/data/forum/threads.bson

mongodump --db fortest --collection posts --out - > ./test/data/forum/posts.bson
mongodump --db fortest --collection threads --out - > ./test/data/forum/threads.bson
