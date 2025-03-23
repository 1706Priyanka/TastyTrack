import { cdnurl } from "../../../../constants";

const LicenseCard = ({ licenseInfo, addressInfo }) => {
  return (
    <>
      <div className="licenseCard">
        <div className="flex licenseContent">
          <div>
            <img src={cdnurl + licenseInfo[0]?.imageId} className="w-[50px]" />
          </div>

          <div className="ml-4">
            <p>{licenseInfo[0]?.text}</p>
          </div>
        </div>

        <div className="licenseContent">
          <p> {addressInfo[0]?.name}</p>
          <p> (Outlet:{addressInfo[0]?.area})</p>
          <p> {addressInfo[0]?.completeAddress}</p>
        </div>
      </div>
    </>
  );
};

export default LicenseCard;
