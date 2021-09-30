import React from 'react';
import { Button } from 'components';

const SplitGridOnRight = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pre-loaded with all your favorite plugins
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Open-source plugins are supported by default. Don&apos;t see something you need? Just let us know. Push your own custom plugins if you need something special.
            </p>
            <div className="mt-8 sm:flex">
              <Button
                link={true}
                to="/free-trial/"
                text="Try it free"
                size="medium"
                color="primary"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  link={true}
                  to="/request-demo/"
                  text="Request a demo"
                  size="medium"
                  color="inset"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SplitGridOnRight;
