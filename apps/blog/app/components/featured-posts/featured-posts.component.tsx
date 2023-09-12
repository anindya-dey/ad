import Image from 'next/image';

export default function FeaturedPosts() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="https://picsum.photos/seed/picsum/400/200"
            alt="Shoes"
            width={400}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 glass">
        <figure>
          <Image
            src="https://picsum.photos/seed/picsum/400/200"
            alt="car!"
            width={400}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </>
  );
}
