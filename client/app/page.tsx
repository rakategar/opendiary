import Wraper from "@/components/global/Wraper";


export default function page(): React.ReactElement {
  return (
    <Wraper title="HEYYY INI HOMEPAGE">
      <div className="grid grid-cols-3 gap-4">
        <div className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:scale-105 h-48">
          <div className="flex items-center gap-4">
            <div className="w-50 h-50 rounded-full bg-primary p-2">IMG</div>
            <p className="font-semibold">Username | Email</p>
          </div>
          <p className="overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            obcaecati, dolore repudiandae quibusdam mollitia, fugit ab
            exercitationem ullam aspernatur quasi sint ipsam modi natus,
            veritatis quae cumque! Blanditiis, atque nihil. Cum consequuntur ab
            modi quibusdam similique ipsa molestiae non laborum, nam eum, iusto
            a adipisci officiis debitis rerum delectus corrupti sint, fuga
            accusamus nisi totam dolore. Quod architecto esse nisi?
          </p>
        </div>
      </div>
    </Wraper>
  );
}