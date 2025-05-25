import ot from "../assets/operation-theater.jpg";

function AboutIR() {
  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold text-black pt-10 text-center">
        ABOUT INTERVENTIONAL RADIOLOGY
      </h1>
      <div className="flex flex-col px-4 lg:px-60 py-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 py-6 text-left">
          Who We Are ( Vascular & Interventional Radiologist )?
        </h2>
        <p className="lg:pr-20 text-lg text-gray-700">
          Interventional radiologist (IR) is a medical specialist who performs
          minimally invasive curative or palliative treatments using radiologic
          imaging for procedure guidance. Interventional radiology treatments
          have become the primary method of care for a variety of conditions,
          offering less risk, less pain and less recovery time, compared to open
          surgery.
        </p>
        <br />
        <div className="flex justify-center">
          <img
            src={ot}
            alt="operation theater image"
            className="w-full md:w-[60%] rounded-md"
          />
        </div>
        <br />
        <p className="lg:pr-20 text-lg text-gray-700">
          <strong>Interventional radiologists</strong> are trained physicians
          who specialize in minimally invasive, targeted treatments. They are
          also experts at reading x -rays, ultrasounds, CTs, MRIs, and other
          forms of medical imaging.
        </p>
        <br />

        <p className="lg:pr-20 text-lg text-gray-700">
          Department of Interventional Radiology (IR) in a hospital is doing lot
          more vascular procedures in a year including all type of Body,
          peripheral and Onco-Interventions.The concept behind interventional
          radiology is to diagnose and treat patients using the least invasive
          techniques currently available in order to minimize risk to the
          patient and improve health outcomes.
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 py-6 text-left">
          Advantages of Interventional Radiology
        </h2>
        <ul className="w-full text-lg px-4">
          <li className="list-disc border-b-1 border-gray-100 py-2">
            Less risk since completely image guidance no injury to adjacent
            structures
          </li>
          <li className="list-disc border-b-1 border-gray-100 py-2">
            Majority procedures done under local anesthesia
          </li>
          <li className="list-disc border-b-1 border-gray-100 py-2">
            Pinhole Surgery – Almost all procedures are done with small nick
          </li>
          <li className="list-disc border-b-1 border-gray-100 py-2">
            Cosmetic advantage since no scar
          </li>
          <li>Early Mobilization</li>
          <li className="list-disc border-b-1 border-gray-100 py-2">
            Faster recovery
          </li>
          <li className="list-disc border-b-1 border-gray-100 py-2">
            Less hospitalization
          </li>
          <li className="list-disc border-b-1 border-gray-100 py-2">
            Overall cost effective
          </li>
        </ul>
        {/* Services */}
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 pt-6 pb-3 text-left">
          Services We Offered
        </h2>
        <ul className="w-full text-lg px-4">
          <li className="list-disc border-b-1 border-blue-200 py-2">
            Liver Tumor Treatment
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Uterine Artery Embolization
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Prostatic Artery Embolization (PAE)
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Thyroid Nodule Ablation
          </li>
          <li>Early Mobilization</li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Varicocele Treatment
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Female Infertility Treatment
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Musculoskeletal (MSK) & Sports Medicine
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Lymphangiography & Lymphatic Interventions
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Pain Management
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Liver Cirrhosis and PHT
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Biliary Tract Disease
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            Bronchial Artery Embolization (BAE)
          </li>
          <li className="list-disc border-b-1 border-gray-200 py-2">
            FNAC – Biopsy
          </li>
          <li className="list-disc py-2">Drainage Procedure</li>
        </ul>
      </div>
    </>
  );
}

export default AboutIR;
