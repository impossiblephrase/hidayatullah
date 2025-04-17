import Image from 'next/image';

const CompanyLogosBanner: React.FC = () => {
  return (
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-28">
          Trusted by Leading Companies
        </h2>

        {/* Logo Wrapper */}
        <div className="overflow-hidden">
          <div className="logos-slider flex items-center justify-center space-x-8 animate-scroll">
            {/* Logos */}
            <Image src="/companies logo/apple.png" alt="apple" width={150} height={150} />
            <Image src="/companies logo/amazon.png" alt="amazon" width={150} height={150} />
            <Image src="/companies logo/cisco.png" alt="cisco" width={150} height={150} />
            <Image src="/companies logo/google.png" alt="google" width={150} height={150} />
            <Image src="/companies logo/hewlet.png" alt="hewlet" width={150} height={150} />
            <Image src="/companies logo/huawei.png" alt="huawei" width={50} height={50} />
            <Image src="/companies logo/microsoft.png" alt="microsoft" width={150} height={150} />
            <Image src="/companies logo/oracle.png" alt="oracle" width={150} height={150} />
            <Image src="/companies logo/sap.png" alt="sap" width={150} height={150} />
            <Image src="/companies logo/yelp.png" alt="yelp" width={150} height={150} />

            {/* Duplicated logos for infinite scroll */}
            <Image src="/companies logo/apple.png" alt="apple" width={150} height={150} />
            <Image src="/companies logo/amazon.png" alt="amazon" width={150} height={150} />
            <Image src="/companies logo/cisco.png" alt="cisco" width={150} height={150} />
            <Image src="/companies logo/google.png" alt="google" width={150} height={150} />
            <Image src="/companies logo/hewlet.png" alt="hewlet" width={150} height={150} />
            <Image src="/companies logo/huawei.png" alt="huawei" width={50} height={50} />
            <Image src="/companies logo/microsoft.png" alt="microsoft" width={150} height={150} />
            <Image src="/companies logo/oracle.png" alt="oracle" width={150} height={150} />
            <Image src="/companies logo/sap.png" alt="sap" width={150} height={150} />
            <Image src="/companies logo/yelp.png" alt="yelp" width={150} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosBanner;
