import Button from '@/components/Button';
import { CancelIcon, CheckIcon, PlusIcon } from '../../public/svgs';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <main className="flex">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Button text="수정 완료" icon={PlusIcon} />
          <Button text="수정 완료" icon={CheckIcon} type="violet" />
          <Button text="수정 완료" icon={CancelIcon} type="red" />
          <Button text="수정 완료" icon={CheckIcon} type="lime" />
        </div>
      </main>
    </div>
  );
}
