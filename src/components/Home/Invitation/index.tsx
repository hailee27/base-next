import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Invitation() {
  const [form, setForm] = useState({
    name: '',
    std: '',
    appect: true
  });
  const [loading, setLoading] = useState<boolean | null>(null);
  const router = useRouter();

  const notify = () =>
    toast(
      <div className="text-center text-[16px] font-medium">
        Tôi đã nhận được câu trả lời rồi.
        <br /> Cảm ơn bạn về phản hồi này !
      </div>,
      {
        position: 'top-center'
      }
    );
  const handleSubmit = useCallback(async () => {
    const paramNhaTrai = new URLSearchParams({
      'entry.581823759': form.name,
      'entry.641017869': form.std,
      'entry.1600231485': form.appect ? 'Có' : 'Không'
    });
    const paramNhaGai = new URLSearchParams({
      'entry.1807568969': form.name,
      'entry.338718565': form.std,
      'entry.105458791': form.appect ? 'Có' : 'Không'
    });

    setLoading(true);
    try {
      await fetch(
        String(
          router.pathname === '/nha-trai'
            ? String(process.env.NEXT_PUBLIC_API_GG_FORM_NHA_TRAI) + paramNhaTrai
            : String(process.env.NEXT_PUBLIC_API_GG_FORM_NHA_GAI) + paramNhaGai
        ),
        {
          mode: 'no-cors'
        }
      );
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e);
    }
  }, [form.appect, form.name, form.std, router.pathname]);
  useEffect(() => {
    if (loading === false) {
      notify();
    }
  }, [loading]);
  useEffect(() => {
    if (router?.query?.khach) {
      setForm((prev) => ({ ...prev, name: String(router?.query?.khach) }));
    }
  }, [router?.query?.khach]);

  return (
    <div className="w-full  min-h-screen flex flex-col items-center ">
      <div className="md:w-[70%] w-[80%] space-y-[40px] flex flex-col md:px-[20px] justify-center flex-1 h-full">
        <div
          className="px-[24px] py-[18px] md:text-[18px] text-[14px] text-center border-2 border-[#870608] text-[#870608]"
          data-aos="fade-up"
        >
          Đám cưới của chúng tôi sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện của các bạn. Xin hãy xác nhận
          sự có mặt của mình để chúng tôi chuẩn bị đón tiếp một cách chu đáo nhất nhé! Trân trọng!
        </div>
        <div className="flex flex-col" data-aos="fade-up">
          <span className="text-[#870608] font-normal md:text-[24px] text-[16px]">Tên của bạn</span>
          <input onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} value={form.name} />
        </div>
        <div className="flex flex-col" data-aos="fade-up">
          <span className="text-[#870608] font-normal md:text-[24px] text-[16px]">Số điện thoại</span>
          <input onChange={(e) => setForm((prev) => ({ ...prev, std: e.target.value }))} />
        </div>

        <div className="flex flex-col items-center w-full ">
          <span className="md:text-[30px] text-[21px] underline underline-offset-8 text-[#870608]" data-aos="fade-up">
            Bạn sẽ đến chứ?
          </span>
          <div className="flex w-full justify-between md:px-[40px] pt-[20px]" data-aos="fade-up">
            <div className="flex  items-center space-x-5 ">
              <input
                type="radio"
                checked={form.appect}
                onChange={() => setForm((prev) => ({ ...prev, appect: !prev.appect }))}
              />
              <span className="text-[#870608] font-normal text-[24px]">Có</span>
            </div>
            <div className="flex  items-center space-x-5">
              <input
                type="radio"
                checked={!form.appect}
                onChange={() => setForm((prev) => ({ ...prev, appect: !prev.appect }))}
              />
              <span className="text-[#870608] font-normal text-[24px]">Không</span>
            </div>
          </div>
        </div>
      </div>
      <button
        data-aos="fade-up"
        onClick={() => handleSubmit()}
        className="bg-[#870608] text-white px-[60px] py-[25px] rounded-lg"
      >
        Gửi
      </button>
      <div className="flex-1"></div>
    </div>
  );
}

export default Invitation;
