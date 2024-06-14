import Menu from './component/account-menu';
import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/queries/users';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ChangeProfilePhoto from './component/ChangeProfilePhoto';
import { Camera } from 'lucide-react';

const AccountLayout = async ({ tabs }) => {
    const { user } = await getServerSession();
    // Get Current User
    const loginUser = await getUserByEmail(user?.email);

    return (
        <section className='relative pb-16'>
            {/*end container*/}
            <div className='container relative mt-10'>
                <div className='lg:flex'>
                    <div className='lg:w-1/4 md:px-3'>
                        <div className='relative'>
                            <div className='p-5 transition-all duration-500 ease-in-out border rounded-md bg-background'>
                                <div className='mb-5 text-center profile-pic'>
                                    <ChangeProfilePhoto user={loginUser} />
                                    <div>
                                        <div className='relative mx-auto cursor-pointer group size-28'>
                                            <div className='absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-500 ease-in-out bg-gray-300 bg-opacity-50 rounded-full dark:bg-opacity-50 dark:bg-gray-500 group-hover:block group-hover:z-10'>
                                                <div className='flex items-center justify-center w-full h-full'>
                                                    <Camera className='w-6 h-6' />
                                                </div>
                                            </div>
                                            <Avatar className='w-full h-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800'>
                                                <AvatarImage
                                                    src={loginUser?.profilePicture?.url}
                                                    alt='profile-image'
                                                />
                                                <AvatarFallback>
                                                    {loginUser?.firstName.slice(0, 2)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <label
                                                className='absolute inset-0 z-30 cursor-pointer'
                                                htmlFor='pro-img'
                                            />
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='text-lg font-semibold'>{`${loginUser?.firstName} ${loginUser?.lastName}`}</h5>
                                            <p className='text-sm text-muted-foreground'>
                                                {loginUser?.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-t border-gray-100 dark:border-gray-700'>
                                    <Menu />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/4 md:px-3 mt-[30px] lg:mt-0'>
                        {tabs}
                        {/* <div className="p-6 bg-white rounded-md shadow dark:shadow-gray-800 dark:bg-slate-900">
							<h5 className="mb-4 text-lg font-semibold">
								Personal Detail :
							</h5>
							<form>
								<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
									<div>
										<Label className="block mb-2">
											First Name :{" "}
											<span className="text-red-600">*</span>
										</Label>
										<Input
											type="text"
											placeholder="First Name:"
											id="firstname"
											name="name"
											required
										/>
									</div>
									<div>
										<Label className="block mb-2">
											Last Name :{" "}
											<span className="text-red-600">*</span>
										</Label>
										<Input
											type="text"
											placeholder="Last Name:"
											name="name"
											required
										/>
									</div>
									<div>
										<Label className="block mb-2">
											Your Email :{" "}
											<span className="text-red-600">*</span>
										</Label>
										<Input
											type="email"
											placeholder="Email"
											name="email"
											required
										/>
									</div>
									<div>
										<Label className="block mb-2">Occupation :</Label>
										<Input
											name="name"
											id="occupation"
											type="text"
											placeholder="Occupation :"
										/>
									</div>
								</div>
								<div className="grid grid-cols-1">
									<div className="mt-5">
										<Label className="block mb-2">
											Description :
										</Label>
										<Textarea
											id="comments"
											name="comments"
											placeholder="Message :"
										/>
									</div>
								</div>
								<Button className="mt-5" asChild>
									<input
										type="submit"
										name="send"
										value="Save Changes"
									/>
								</Button>
							</form>
						</div>
						<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
							<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
								<div>
									<h5 className="mb-4 text-lg font-semibold">
										Contact Info :
									</h5>
									<form>
										<div className="grid grid-cols-1 gap-5">
											<div>
												<Label className="block mb-2">
													Phone No. :
												</Label>
												<Input
													name="number"
													id="number"
													type="number"
													placeholder="Phone :"
												/>
											</div>
											<div>
												<Label className="block mb-2">
													Website :
												</Label>
												<Input
													name="url"
													id="url"
													type="url"
													placeholder="Url :"
												/>
											</div>
										</div>
										<Button className="mt-5" type="submit">
											Add
										</Button>
									</form>
								</div>
								<div>
									<h5 className="mb-4 text-lg font-semibold">
										Change password :
									</h5>
									<form>
										<div className="grid grid-cols-1 gap-5">
											<div>
												<Label className="block mb-2">
													Old password :
												</Label>
												<Input
													type="password"
													placeholder="Old password"
													required=""
												/>
											</div>
											<div>
												<Label className="block mb-2">
													New password :
												</Label>
												<Input
													type="password"
													placeholder="New password"
													required=""
												/>
											</div>
											<div>
												<Label className="block mb-2">
													Re-type New password :
												</Label>
												<Input
													type="password"
													placeholder="Re-type New password"
													required=""
												/>
											</div>
										</div>
										<Button className="mt-5" type="submit">
											Save password
										</Button>
									</form>
								</div>
							</div>
						</div> */}
                    </div>
                </div>
                {/*end grid*/}
            </div>
            {/*end container*/}
        </section>
    );
};

export default AccountLayout;