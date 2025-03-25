# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 2.0.0 (2025-03-25)


### ⚠ BREAKING CHANGES

* in previous version using jalaliday cause to change dayjs default locale to `fa`
from now on users must change locale if needed

### Features

* support toArray proto for jalali calendar ([e7b9c9e](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/e7b9c9ec1a351208f96a02ae3957f6612c9f070f))
* **relative times:** adds relative time strings for fa locale ([e961a1f](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/e961a1f585330f24b319c98ea97008b41d117070))
* **startOf:** Support customizable first day of week ([6e3dac4](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/6e3dac4c6846c076adc14d9c5b1f9fa588c75398))


### Bug Fixes

* **$set:** prevent date from exceeding month limit ([#19](https://github.com/YumcoderCom/antd-dayjs-jalali/issues/19)) ([66c8e76](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/66c8e765901dde2a4901ab23dc6bd95d33fe326f))
* **add-month:** prevent exceed from days of month ([9835799](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/9835799c757b3db8cade2dbedef7d126216dcd7e))
* **calendar:** 1403 leap year ([3f7353a](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/3f7353a71bf7cba2a5e802162502dca34ad46bde))
* support dayjs 1.8.15 ([cc5754c](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/cc5754c87d6183fae890b538b1073bf1a0a5a434))
* **date:** rename day function to date ([dfed41e](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/dfed41eca079ac289634b7b544e4ca17bfdbe8d9))
* **installation command:** changes yard to yarn ([13eec41](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/13eec4167ecb934be26785a8179f53055d523917))
* **linter errors:** fixes linter errors on plugin, reliable and test files ([a209460](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/a2094604daedeea6772d7d3d7547e36189f726dd))
* **plugin:** refactor add and startOf functionality ([8435a56](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/8435a560cdf83a5fce34a7f9cc92960664875a3b)), closes [#8](https://github.com/YumcoderCom/antd-dayjs-jalali/issues/8)
* **plugin:** support dayjs^1.8.9 ([31bd189](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/31bd189b5b03d7fce1be80017a78ff5d2fc3c2ad)), closes [#6](https://github.com/YumcoderCom/antd-dayjs-jalali/issues/6)
* **relativeTimes:** adds the object to the fa constant ([e280f2a](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/e280f2aff5004487da44738568e88bd0082b1e49))
* **toArray:** override toArray if exists ([00c6548](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/00c6548d7de68566027d416b141a19b61f0268c7))
* kepp dayjs default locale ([b152b60](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/b152b6051cfeb183b225daa812a3a98cae4fc8f5))
* wrap dayjs functions to keep calendar on new instances ([f10e9fe](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/f10e9fe2aaa6f27c4b59241dc7393d9b43082ec6))
* **utils.js:** Fix typo in monthDiff function ([df0678e](https://github.com/YumcoderCom/antd-dayjs-jalali/commit/df0678e1c5bdae6ef41f3ecc85e4acbe910e2241))

### [1.0.28](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.27...v1.0.28) (2020-01-09)

### [1.0.27](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.26...v1.0.27) (2020-01-09)

### [1.0.26](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.25...v1.0.26) (2020-01-09)

### [1.0.25](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.24...v1.0.25) (2020-01-09)

### [1.0.24](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.23...v1.0.24) (2020-01-09)

### [1.0.23](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.22...v1.0.23) (2020-01-09)

### [1.0.22](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.21...v1.0.22) (2020-01-08)

### [1.0.21](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.20...v1.0.21) (2020-01-08)

### [1.0.20](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.19...v1.0.20) (2020-01-08)

### [1.0.19](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.18...v1.0.19) (2020-01-08)

### [1.0.18](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.17...v1.0.18) (2020-01-08)

### [1.0.17](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.16...v1.0.17) (2020-01-08)

### [1.0.16](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.15...v1.0.16) (2020-01-07)

### [1.0.15](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.14...v1.0.15) (2020-01-07)

### [1.0.14](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.13...v1.0.14) (2020-01-07)

### [1.0.13](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.12...v1.0.13) (2020-01-07)

### [1.0.12](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.11...v1.0.12) (2020-01-07)

### [1.0.11](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.10...v1.0.11) (2020-01-07)

### [1.0.10](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.9...v1.0.10) (2020-01-07)

### [1.0.9](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.8...v1.0.9) (2020-01-07)

### [1.0.8](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.7...v1.0.8) (2020-01-06)

### [1.0.7](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.6...v1.0.7) (2020-01-06)

### [1.0.6](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.5...v1.0.6) (2020-01-06)

### [1.0.5](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.4...v1.0.5) (2020-01-06)

### [1.0.4](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v1.0.3...v1.0.4) (2020-01-06)

### [1.0.3](https://github.com/YumcoderCom/antd-dayjs-jalali/compare/v2.2.5...v1.0.3) (2020-01-06)

## [2.2.5](https://github.com/alibaba-aero/jalaliday/compare/v2.2.4...v2.2.5) (2019-10-31)


### Bug Fixes

* **$set:** prevent date from exceeding month limit ([#19](https://github.com/alibaba-aero/jalaliday/issues/19)) ([66c8e76](https://github.com/alibaba-aero/jalaliday/commit/66c8e76))



## [2.2.5](https://github.com/alibaba-aero/jalaliday/compare/v2.2.4...v2.2.5) (2019-10-31)


### Bug Fixes

* **$set:** prevent date from exceeding month limit ([#19](https://github.com/alibaba-aero/jalaliday/issues/19)) ([66c8e76](https://github.com/alibaba-aero/jalaliday/commit/66c8e76))



## [2.2.4](https://github.com/alibaba-aero/jalaliday/compare/v2.2.3...v2.2.4) (2019-09-22)


### Bug Fixes

* **add-month:** prevent exceed from days of month ([9835799](https://github.com/alibaba-aero/jalaliday/commit/9835799))

### [2.2.3](https://github.com/alibaba-aero/jalaliday/compare/v2.2.2...v2.2.3) (2019-08-23)


### Bug Fixes

* support dayjs 1.8.15 ([cc5754c](https://github.com/alibaba-aero/jalaliday/commit/cc5754c))

## [2.2.2](https://github.com/alibaba-aero/jalaliday/compare/v2.2.1...v2.2.2) (2019-03-14)


### Bug Fixes

* **toArray:** override toArray if exists ([00c6548](https://github.com/alibaba-aero/jalaliday/commit/00c6548))



## [2.2.1](https://github.com/alibaba-aero/jalaliday/compare/v2.2.0...v2.2.1) (2019-03-10)


### Bug Fixes

* **plugin:** refactor add and startOf functionality ([8435a56](https://github.com/alibaba-aero/jalaliday/commit/8435a56)), closes [#8](https://github.com/alibaba-aero/jalaliday/issues/8)
* **plugin:** support dayjs^1.8.9 ([31bd189](https://github.com/alibaba-aero/jalaliday/commit/31bd189)), closes [#6](https://github.com/alibaba-aero/jalaliday/issues/6)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/alibaba-aero/jalaliday/compare/v2.1.1...v2.2.0) (2019-02-27)


### Features

* support toArray proto for jalali calendar ([e7b9c9e](https://github.com/alibaba-aero/jalaliday/commit/e7b9c9e))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/alibaba-aero/jalaliday/compare/v2.0.1...v2.1.1) (2019-02-02)


### Bug Fixes

* **installation command:** changes yard to yarn ([13eec41](https://github.com/alibaba-aero/jalaliday/commit/13eec41))
* **linter errors:** fixes linter errors on plugin, reliable and test files ([a209460](https://github.com/alibaba-aero/jalaliday/commit/a209460))
* **relativeTimes:** adds the object to the fa constant ([e280f2a](https://github.com/alibaba-aero/jalaliday/commit/e280f2a))


### Features

* **relative times:** adds relative time strings for fa locale ([e961a1f](https://github.com/alibaba-aero/jalaliday/commit/e961a1f))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/alibaba-aero/jalaliday/compare/v2.0.0...v2.0.1) (2018-12-07)


### Bug Fixes

* wrap dayjs functions to keep calendar on new instances ([f10e9fe](https://github.com/alibaba-aero/jalaliday/commit/f10e9fe))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/alibaba-aero/jalaliday/compare/v1.1.0...v1.1.1) (2018-12-05)


### Bug Fixes

* **date:** rename day function to date ([dfed41e](https://github.com/alibaba-aero/jalaliday/commit/dfed41e))
* **utils.js:** Fix typo in monthDiff function ([df0678e](https://github.com/alibaba-aero/jalaliday/commit/df0678e))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/alibaba-aero/jalaliday/compare/v1.0.0...v1.1.0) (2018-09-02)


### Features

* **startOf:** Support customizable first day of week ([6e3dac4](https://github.com/alibaba-aero/jalaliday/commit/6e3dac4))



<a name="1.0.0"></a>
# 1.0.0 (2018-09-01)
