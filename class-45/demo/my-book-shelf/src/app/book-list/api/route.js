import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: String,
  description: String,
  status: String
});

const Books = mongoose.model('Books', schema);

mongoose.connect('mongodb+srv://admin:admin@cluster0.3uy2dfd.mongodb.net/?retryWrites=true&w=majority');

export async function GET() {
  const bookDocuments = await Books.find({});

  return Response.json({ data: bookDocuments });
}