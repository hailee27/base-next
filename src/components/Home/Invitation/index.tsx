import React from 'react';

function Invitation() {
  // const [form, setForm] = useState({
  //   name: '',
  //   appect: ''
  // });
  // entry.1807568969=Ng%E1%BB%8Dc+%C3%81nh&entry.338718565=0393962336&entry.105458791=C%C3%B3
  // 'entry.581823759': form.name,
  // 'entry.1600231485': form.appect
  // const handleSubmit = useCallback(async () => {
  //   try {
  //     await fetch(
  //       String(process.env.NEXT_PUBLIC_API_GG_FORM_NHA_GAI) +
  //         new URLSearchParams({
  //           'entry.1807568969': form.name,
  //           'entry.105458791': form.appect,
  //           'entry.338718565': '0123456789'
  //         }),
  //       {
  //         mode: 'no-cors'
  //       }
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [form]);
  return (
    <div className="w-full bg-[#ffe3e3] min-h-screen flex flex-col items-center ">
      <div className="w-full flex flex-col px-[20px] flex-1 h-full">
        <div className="flex w-full  space-x-[40px] items-center flex-1">
          <div className="flex flex-col flex-1">
            <span className="text-[#870608] font-normal text-[24px]">Tên của bạn</span>
            <input />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[#870608] font-normal text-[24px]">Số điện thoại</span>
            <input />
          </div>
        </div>
        <div className="flex flex-col items-center w-full ">
          <span className="text-[30px]">Bạn sẽ đến chứ?</span>
          <div className="flex w-full ju">
            <div className="flex flex-1 items-center">
              <input type="radio" />
              <span className="text-[#870608] font-normal text-[24px]">Có</span>
            </div>
            <div className="flex flex-1 items-center">
              <input type="radio" />
              <span className="text-[#870608] font-normal text-[24px]">Có</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">alo</div>
    </div>
  );
}

export default Invitation;
